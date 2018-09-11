import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { serverComponent} from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UdemyComponent } from './udemy/udemy.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shoppingListFeature/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shoppingListFeature/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './recipeBookFeature/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipeBookFeature/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipeBookFeature/recipe-detail/recipe-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    serverComponent,
    ServersComponent,
    UdemyComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
