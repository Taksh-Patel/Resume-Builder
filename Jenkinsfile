pipeline {
		agent any 
    stages {
        stage('Git Pull') {
            steps {
				git url: 'https://github.com/Taksh-Patel/Resume-Builder.git', branch: 'main',
                credentialsId: 'git'
            }
        }
        stage('npm Build') {
            steps {
                nodejs(nodeJSInstallationName: 'NodeJS') {
                    sh 'npm run build'
                }
            }
        }
        stage('npm Test') {
            steps {
                nodejs(nodeJSInstallationName: 'NodeJS') {
                    sh 'npm test'
                }
            }
        }
        stage('Docker Build') {
            steps {
                sh 'docker build -t takshpatel/resume-builder:latest .'
            }
        }
        stage('Docker Push') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub', passwordVariable: 'dockerHubPassword', usernameVariable: 'dockerHubUser')]) {
                sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPassword}"
                sh 'docker push takshpatel/resume-builder:latest'
                }
            }
        }
        stage('Clean Docker Images') {
            steps {
                sh 'docker rmi -f takshpatel/resume-builder'
            }
        }
        stage('Ansible Deploy to k8s') {
            steps {
                ansiblePlaybook colorized: true, disableHostKeyChecking: true, installation: 'Ansible', inventory: 'inventory', playbook: 'deploy.yml'
            }
        }
    }
}