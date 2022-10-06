# Repro Steps
- `cd ./appshell` and run `npm i --legacy-peer-deps` and then `npm run build`
- `cd ../design-system` and run `dotnet build`
- `cd ../layout-pilet` and run `dotnet build`
- `cd ../blog-pilet` and run `dotnet build`
- `cd ../shop-pilet` and run `dotnet build`
- `cd ../.piral~/shop-pilet` and run `npm run start:local`

# Main Problems
1. If you load the / page with f5 and click on blog sometimes this error shows up in the browsers console (you may have to try a few times because it does work sometimes):  
   > Piral.Blazor.Core.ModuleContainerService[0]  
      Could not establish local dependency injection. Error: System.Reflection.  TargetInvocationException: Exception has been thrown by the target of an invocation.
       ---> System.InvalidOperationException: Cannot provide a value for property '_exampleJsInterop' on type 'blog_pilet.Pages.BlogIndex'. There is no registered service of type 'design_system.ExampleJsInterop'.

2. The terminal shows the following error for css maps:
    > ERR Error: Invalid URI "/1/_content/design-system/MyButton.razor.css.map"


# Other Problems
These are just warnings. The app does still work.
1. The terminal shows the following message but i am using version 6.0.9 in my pilets:  
   > The app shell already integrates piral-blazor with blazor. The Blazor versions of your pilet and Piral Instance do not match, but seem to be compatible:  
      \- Piral Instance Blazor version = 6.0.9.nwtam96n32  
      \- Pilet Blazor version = 6.0.5.g1sa2oy0jw`

2. when running `` the terminal shows the following message:  
   > build started (change: "dist")  
    \> src/index.tsx:1:27: error: No loader is configured for ".codegen" files: src/blazor.codegen  
    1 │ import * as Blazor from './blazorr.codegen';