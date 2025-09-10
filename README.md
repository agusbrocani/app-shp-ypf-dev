# Proyecto de prueba SPFx + Graph

## Tecnologías y versiones utilizadas

- **React**: 17.0.1  
- **React Router DOM**: 6.30.1  
- **Node.js**: >=22.14.0 < 23.0.0  
- **Microsoft Graph**: @microsoft/microsoft-graph-client ^3.0.7  
- **SharePoint Framework (SPFx)**: 1.21.1  

---

## Ejecución del proyecto

1. Clonar este repositorio:

   ```bash
   git clone -b main "https://github.com/agusbrocani/app-shp-ypf-dev"
   ```

2. Instalar dependencias:

   ```bash
   npm install
   ```

3. Levantar el entorno de desarrollo:

   ```bash
   npm run dev
   ```

4. Abrir desde debugger con de **Workbench** o **Manifests** para cargar la webpart.

---

## Notas

- El proyecto utiliza **SPFx + Microsoft Graph** para consultar datos de SharePoint.  
- El comando `npm run dev` ejecuta `gulp serve --nobrowser` y prepara el entorno de debug.  
- Para ver la webpart en acción, se debe agregar manualmente al **Workbench de SharePoint** o a una página de prueba en el sitio.
