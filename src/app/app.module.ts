import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


//components
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { ShoppingListEditComponent } from './Shopping-list/shopping-list-edit/shopping-list-edit.component'
import { ShoppingListComponent} from './Shopping-List/shopping-list/shopping-list.component';
import { RecipieListComponent } from './Recipie-Book/recipie-list/recipie-list.component';
import { RecipieItemComponent } from './Recipie-Book/recipie-list/recipie-item/recipie-item.component';
import { RecipieDetailComponent } from './Recipie-Book/recipie-list/recipie-detail/recipie-detail.component';
import { RecipiesComponent } from './src/app/recipies/recipies.component';
import { ShoppingEditComponent } from './src/app/shopping-list/shopping-edit/shopping-edit.component';

// MODELS


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListEditComponent,
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
