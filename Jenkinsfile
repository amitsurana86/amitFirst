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
		stage('API Hit') {
			steps {
				parallel "first": {
						script {
							echo 'Hello, First API HIT'
							curl 'http://localhost:3000'
						}
					},
					"second": {
						script {
							echo 'Hello, Second API HIT'
							curl 'http://localhost:3001'
						}
					}
				}
			}
		}
    }
