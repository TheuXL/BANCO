// src/main.server.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { mergeApplicationConfig } from '@angular/core';
import { serverConfig } from './app/app.config.server';

const config = mergeApplicationConfig(serverConfig, {
  providers: [provideRouter(routes)]
});

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
