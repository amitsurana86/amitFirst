pipeline {
    agent any 
    stages {
		stage('Checkout') {
			checkout scm
		}
        stage('Build') {
            steps {
				parallel "first": {
						script {
							echo 'Hello, First'
							bat 'PORT=3000 npm start &'
						}
					},
					"second": {
						script {
							echo 'Hello, Second'
							bat 'PORT=3001 npm start &'
						}
					}
				}
            }
		stage('API Hit') {
			steps {
				parallel "first": {
						script {
							echo 'Hello, First'
							curl 'http://localhost:3000'
						}
					},
					"second": {
						script {
							echo 'Hello, Second'
							curl 'http://localhost:3001'
						}
					}
				}
			}
		}
    }
}