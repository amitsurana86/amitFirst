pipeline {
    agent any 
    stages {
        stage('Build') {
            steps {
				script {
					echo 'Hello, Maven'
					bat "nohup npm start"
				}
            }
        }
    }
}