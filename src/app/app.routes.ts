import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Dashboard } from './pages/dashboard/dashboard';
import { Chatbot } from './components/chatbot/chatbot';

export const routes: Routes = [
    {
        path: '',
        component: Home
    }
];
