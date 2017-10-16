import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


//components
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component'
import { ShoppingListComponent} from './shopping-list/shopping-list.component';
import { RecipieListComponent } from './recipies/recipie-list/recipie-list.component';
import { RecipieItemComponent } from './recipies/recipie-list/recipie-item/recipie-item.component';
import { RecipieDetailComponent } from './recipies/recipie-detail/recipie-detail.component';
import { RecipiesComponent } from './recipies/recipies.component';

// MODELS


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingEditComponent,
    ShoppingListComponent,
    RecipieListComponent,
    RecipieItemComponent,
    RecipieDetailComponent,
    RecipiesComponent,
    ShoppingEditComponent,
    

  ],
  imports: [
    BrowserModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
