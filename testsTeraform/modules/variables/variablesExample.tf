variable "http_port" {
  description = "Port pour les requêtes HTTP"
  default = 80
}

variable "ssh_port" {
  description = "Port pour les requêtes SSH"
  default = 22
}

variable "mariadb_port" {
  description = "Port pour les connexions MariaDB"
  default = 3306
}

variable "vpc_cidr_block" {
  description = "CIDR block for VPC"
  type        = string
  default     = "10.0.0.0/16"
}