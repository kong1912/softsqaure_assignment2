import { Routes } from '@angular/router';
import { DirectiveComponent } from './directive/directive.component';
import { LoginComponent } from './login/login.component';
import { PipeComponent } from './pipe/pipe.component';

export const routes: Routes = [
    {
        path: 'directive',
        component: DirectiveComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'pipe',
        component: PipeComponent
    }
];
