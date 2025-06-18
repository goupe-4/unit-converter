pipeline {
    // utiliser n'importe quel agent
    agent any

    // Déclaration de nos variables globaux
    environment {
        IMAGE_NAME       = "unit-converter-app"
        IMAGE_VERSION    = "1.${BUILD_NUMBER}"
        DOCKER_IMAGE     = "${IMAGE_NAME}:${IMAGE_VERSION}"
        DOCKER_CONTAINER = "unit-converter"
    }

    // Création des différents Stage
    stages {
        //Récuperation du code source sur github
        stage("Récupèratin du Code source") {
            steps {
                git branch: 'master', url: 'https://github.com/goupe-4/unit-converter'
            }
        }

        //Création de l'image
        stage("Création de l'Image") {
            steps {
                sh "docker build -t $DOCKER_IMAGE ."
            }
        }

        // Envoyer l'image sur Docker hub
        stage("Envoyer l'image sur Docker hub") {
            steps {
                withCredentials([usernamePassword(credentialsId: 'afma', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASSWORD')]) {
                    sh """
                    docker login -u $DOCKER_USER -p $DOCKER_PASSWORD
                    docker tag $DOCKER_IMAGE $DOCKER_USER/$IMAGE_NAME:$IMAGE_VERSION
                    docker push $DOCKER_USER/$IMAGE_NAME:$IMAGE_VERSION
                    """
                }
            }
        }
  
        //Déployer le conteneur sur Docker
        stage("Déploiement du Container") {
            steps {
                sh """
                docker container stop $DOCKER_CONTAINER || true
                docker container rm $DOCKER_CONTAINER || true
                docker run -d --name $DOCKER_CONTAINER -p 8082:80 $DOCKER_IMAGE
                """
            }
        }
    }
}
