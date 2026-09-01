# Arquitectura del software

```text
┌───────────────────────────────┐
│ PRESENTACIÓN                  │
│ EJS + Bootstrap + CSS         │
└───────────────┬───────────────┘
                │ HTTP
┌───────────────▼───────────────┐
│ CONTROLADORES / RUTAS         │
│ Express                       │
└───────────────┬───────────────┘
                │
┌───────────────▼───────────────┐
│ LÓGICA / SERVICIOS            │
│ Validaciones + permisos       │
└───────────────┬───────────────┘
                │
┌───────────────▼───────────────┐
│ MODELOS / ACCESO A DATOS      │
│ Mongoose                      │
└───────────────┬───────────────┘
                │
┌───────────────▼───────────────┐
│ MongoDB                       │
└───────────────────────────────┘
```

La arquitectura separa presentación, control de solicitudes, lógica reutilizable y persistencia. Esto facilita el mantenimiento y permite modificar una capa sin afectar directamente a las demás.
