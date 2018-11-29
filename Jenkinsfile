pipeline {
    agent any 
    stages {
        stage('Build') {
            steps {
				parallel "first": {
						script {
							echo 'Hello, First'
							bat 'npm start &'
						}
					},
					"second": {
						script {
							echo 'Hello, Second'
							bat 'npm start &'
						}
					}
				}
            }
        }
    }