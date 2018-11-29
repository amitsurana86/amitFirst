pipeline {
    agent any 
    stages {
        stage('Build') {
            steps {
				parallel "first": {
						script {
							echo 'Hello, First'
						}
					},
					"second": {
						script {
							echo 'Hello, Second'
						}
					}
				}
            }
        }
    }