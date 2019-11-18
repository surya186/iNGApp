Structure of Components till date:-

  | AppComponent
  |___ HeaderComponent
  |___ RecipesComponent
     |___ Recipe-DetailsComponent
     |___ Recipe-listComponent
        |___ Recipe-itemComponent


In this commit, 
Passed data from the recipe-item to the recipe component using event emitter.


Firstly,(a) emitted the selected recipe-item via the <a> tag using @Output() to the parent component i.e., recipe-list  


  | AppComponent
  |___ HeaderComponent
  |___ RecipesComponent
     |___ Recipe-DetailsComponent
     |___ Recipe-listComponent   <--------------------| (a) 
        |___ Recipe-itemComponent ____________________|

Secondly, (b) emitted the selected recipe using @Output() to the parent component i.e., recipes component. 

  | AppComponent
  |___ HeaderComponent
  |___ RecipesComponent   <--------------------------| 
     |___ Recipe-DetailsComponent                    | (b)
     |___ Recipe-listComponent   ____________________| 
        |___ Recipe-itemComponent 


In the recipes component, will catch the emitted event by the recipe-list component into the <app-recipe-list> element in the recipes component. From which, will store that value into a variable and now we can use that variable (it contains the selected recipe from the recipe-item component) into the <app-recipe-detail> element in the recipes component and which renders the recipe details.