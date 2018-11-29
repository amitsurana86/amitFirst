pipeline {
    agent any 
    stages {
        stage('Build') {
            steps {
				parallel "first": {
						script {
							echo 'Hello, First'
							bat 'set PORT=3000'
							bat 'npm start &'
						}
					},
					"second": {
						script {
							echo 'Hello, Second'
							bat 'set PORT=3001'
							bat 'npm start &'
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
