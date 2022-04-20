import React from "react";


export type ComponentRouterType = {
    path: string
    component: React.ComponentType
}

export enum RouteTitles {
    LOGIN = '/login',
    HOME = '/',
    PROFILE = '/profile',

}


// export const publicRoutes: ComponentRouterType[] = [
//     {path: RouteTitles.LOGIN, component: Login}
// ]
//
// export const privateRoutes: ComponentRouterType[] = [
//     {}
// ]