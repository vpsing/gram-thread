pipeline {

    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-creds')

        BACKEND_IMAGE = "viprana21/gram-thread-backend:latest"
        FRONTEND_IMAGE = "viprana21/gram-thread-frontend:latest"
    }


    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    credentialsId: 'github-creds',
                    url: 'https://github.com/vpsing/gram-thread.git'
            }
        }


        stage('Docker Login') {
            steps {
                sh '''
                echo $DOCKERHUB_CREDENTIALS_PSW | docker login \
                -u $DOCKERHUB_CREDENTIALS_USR \
                --password-stdin
                '''
            }
        }


        stage('Build Backend Image') {
            steps {
                sh '''
                cd gram-thread-backend

                docker build \
                -t $BACKEND_IMAGE .
                '''
            }
        }


        stage('Build Frontend Image') {
            steps {
                sh '''
                cd gram-thread-frontend

                docker build \
                -t $FRONTEND_IMAGE .
                '''
            }
        }


        stage('Push Images To DockerHub') {
            steps {
                sh '''
                docker push $BACKEND_IMAGE
                docker push $FRONTEND_IMAGE
                '''
            }
        }


        stage('Deploy To Kubernetes') {
            steps {
                sh '''
                kubectl apply -f k8s/
                '''
            }
        }

    }
}
