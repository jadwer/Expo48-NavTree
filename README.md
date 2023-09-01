# Proyecto Aun Sin Nombre
## Módulos del proyecto
- Expo 48
- Screens
- Stack
- Drawer
- firebase
- expo calentar / React Native Calendars 

## Pantallas
- login title - touchable -> Drawer - Menu
- Menu
- Recordatorios
- Calendario
- Mochila
- Horario
- Resultados
    - TODO
    - Calendar
![Initial WireFrame](https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/0b37f44368a4f1b2d1456a4488097439)

## Menus
- stack
    - Login
    - Drawer
        Menu - initial
        Re...
![NavScreen Tree](https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/e07454784909c3630d65fa355eb37e9d)

## Definición de la app
- Usuarios
- Base de datos

## Components
- TODO_Card
- Search

### Recordatorios
- La imagen es dinámina o hardcodeada?
- firebase: user/UUID/recordatorios
    - Title:
    - Description
    - Status
    - Deadline (Fecha límite)
    - created_at
    - Image?? need URL
- firebase: user/UUID/calentar
    - Title
    - Description
    - date
    - start_time
    - end_time
    - created_at
- firebase: user/UUID/materias
    - Materia
    - requisitos
- firebase: user/UUID/horario
    - hora: 0
    - dia:
    - materia:
nota: puedes tener hardcodeado array de horas
horas : {'7:00 - 8:00', '8:00 - 9:00'}
horas[0] // 7:...