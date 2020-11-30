FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM node:12.16.1-alpine As builder
ARG skip_client_build=false 
WORKDIR /app 
COPY ./ClientApp . 
RUN [[ ${skip_client_build} = true ]] && echo "Skipping npm install" || npm install 
RUN [[ ${skip_client_build} = true ]] && mkdir dist || npm run-script build

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["OnlineStore-Frontend.csproj", "./"]
RUN dotnet restore "OnlineStore-Frontend.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "OnlineStore-Frontend.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "OnlineStore-Frontend.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
COPY --from=client /app/dist /app/dist
ENTRYPOINT ["dotnet", "OnlineStore-Frontend.dll"]
