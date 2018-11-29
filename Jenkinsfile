pipeline {
    agent any 
    stages {
        stage('Build') {
            steps {
				parallel {
					stage('first') {
						script {
							echo 'Hello, First'
						}
					}
					stage('second') {
						script {
							echo 'Hello, Second'
						}
					}
				}
            }
        }
    }
}