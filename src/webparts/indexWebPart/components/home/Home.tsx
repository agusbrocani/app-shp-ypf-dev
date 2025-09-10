import * as React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MSGraphClientV3 } from "@microsoft/sp-http";
import { WebPartContext } from "@microsoft/sp-webpart-base";

interface IHomeProps {
    context: WebPartContext;
}

interface IListItem {
    id: string;
    fields: {
        Title: string;
    };
}

const Home: React.FC<IHomeProps> = ({ context }) => {
    const [items, setItems] = useState<IListItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();

    const irAlAdmin = (): void => {
        navigate("/admin");
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const client: MSGraphClientV3 = await context.msGraphClientFactory.getClient("3");

                // 1. Traer el siteId usando dominio + path
                const site = await client
                    .api(`/sites/circo.sharepoint.com:/sites/SHP-YPF-DEV`)
                    .get();

                const siteId: string = site.id;

                // 2. Traer items de la lista "ListaPruebaGraph"
                const response = await client
                    .api(`/sites/${siteId}/lists/ListaPruebaGraph/items`)
                    .expand("fields")
                    .get();

                setItems(response.value || []);
            } catch (err: any) {
                console.error("Error trayendo items desde Graph:", err);
                setError(err.message || "Error desconocido");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [context]);

    return (
        <div style={{ padding: "2rem" }}>
            <h1>Página de inicio</h1>
            <button onClick={irAlAdmin}>Ir al panel de administración</button>

            <h2 style={{ marginTop: "2rem" }}>Items en ListaPruebaGraph</h2>

            {loading && <p>Cargando items...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {!loading && !error && (
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>{item.fields?.Title || "(sin título)"}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Home;
