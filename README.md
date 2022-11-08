# Repro Steps
- `cd ./appshell` and run `npm i --legacy-peer-deps` and then `npm run build`
- `cd ../design-system` and run `dotnet build`
- `cd ../layout-pilet` and run `dotnet build`
- `cd ../blog-pilet` and run `dotnet build`
- `cd ../shop-pilet` and run `dotnet build`
- `cd ../.piral~/shop-pilet` and run `npm run start:local`

# Problem
Fehler in Browser Console "Could not load file or assembly Core"