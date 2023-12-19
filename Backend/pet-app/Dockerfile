FROM eclipse-temurin:17-jdk-alpine
MAINTAINER PetNotesTeam
VOLUME /tmp
COPY target/pet-notes-0.0.1-SNAPSHOT.jar pet-notes-api.jar
ENTRYPOINT ["java", "-jar","/pet-notes-api.jar"]
EXPOSE 8080