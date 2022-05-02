module "server" {
  source = "../modules/server"
}

module "variables" {
  source = "../modules/variables"

  base_cidr_block = "10.0.0.0/8"
}