# ngx-katex

A simple Angular wrapper for KaTeX.  This project is a simplified fork of ng-katex with updated libraries.

## Installation

Install the library and it's dependencies.

```
yarn add ngx-katex katex
yarn add --dev @types/katex
```

Load the Katex CSS in your styles.scss

```scss
@import 'katex/dist/katex.css';
```

## Usage

Simple usage

```typescript
import { Component } from '@angular/core';
import { NgxKatexComponent } from 'ngx-katex';

@Component({
  selector: 'my-app',
  template: `<ngx-katex [equation]="equation"></ngx-katex>`
})
export class AppComponent {
  equation: string = '\\sum_{i=1}^nx_i';
```

Simple usage with KaTeX [options](https://katex.org/docs/options.html).

```typescript
import { Component } from '@angular/core';
import { NgxKatexComponent } from 'ngx-katex';
import { KatexOptions } from 'ng-katex';

@Component({
  selector: 'my-app',
  template: `<ngx-katex [equation]="equation" [options]="options"></ngx-katex>`
})
export class AppComponent {
  equation: string = '\\sum_{i=1}^nx_i';
  options: KatexOptions = {
    displayMode: true,
  };
}
```

## Thanks

Thanks to Sergio García Prado [@garciparedes](https://garciparedes.me/) for the original [ng-katex](https://github.com/garciparedes/ng-katex).

