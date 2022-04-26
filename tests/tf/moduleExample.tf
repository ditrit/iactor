module "network" {
  source = "../modules/aws-network"

  base_cidr_block = "10.0.0.0/8"
}

module "variables" {
  source = "../modules/variables"

  vpc_id     = module.network.vpc_id
  subnet_ids = module.network.subnet_ids
}