import * as React from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
    React.useEffect(() => {
        console.clear();
        console.log("Componente 'Home' renderizado.");
    }, []);

    const navigate = useNavigate();

    const irAlAdmin = (): void => {
        navigate("/admin");
    };

    return (
        <div style={{ padding: "2rem" }}>
            <h1>Página de inicio</h1>
            <button onClick={irAlAdmin}>Ir al panel de administración</button>
        </div>
    );
};

export default Home;
