FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["OnlineStore-Frontend.csproj", "./"]
RUN dotnet restore "OnlineStore-Frontend.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "OnlineStore-Frontend.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "OnlineStore-Frontend.csproj" -c Release -o /app/publish

FROM node as nodebuilder
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY ./ClientApp/package.json /usr/src/app/package.json
RUN npm install
COPY ./ClientApp/. /usr/src/app
RUN npm run build

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
RUN mkdir -p /app/ClientApp/dist
COPY --from=nodebuilder /usr/src/app/dist/. /app/ClientApp/dist/
ENTRYPOINT ["dotnet", "OnlineStore-Frontend.dll"]
