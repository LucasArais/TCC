# Dockerfile para backend Spring Boot (Java 21)
FROM eclipse-temurin:21-jdk AS build
WORKDIR /app
COPY . .
RUN ./mvnw clean package -DskipTests

FROM eclipse-temurin:21-jre
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
ENV DB_PASSWORD=postgres
ENTRYPOINT ["java", "-jar", "app.jar"]
