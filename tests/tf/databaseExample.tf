resource "aws_db_subnet_group" "rds_subnet" {
    name = "rds_subnet_grpp"
    subnet_ids = ["${aws_subnet.webservers-a.id}","${aws_subnet.webservers-b.id}"]
}

resource "aws_db_instance" "myawsdb" {
    allocated_storage = 20
    engine = "mariadb"
    engine_version = "10.1.26"
    instance_class = "db.t2.micro"
    name = "myawsdb"
    username = "user"
    password = "password"
    db_subnet_group_name = "${aws_db_subnet_group.rds_subnet.id}"
    skip_final_snapshot = false
    multi_az = true
    final_snapshot_identifier = "myawsdbfinalsnap"
    vpc_security_group_ids = ["${aws_security_group.sg_rds.id}"]
}

resource "aws_security_group" "sg_rds" {
    name = "sg_rds"
    vpc_id = "${aws_vpc.vpc_main.id}"
    ingress {
        from_port = "${var.mariadb_port}"
        to_port = "${var.mariadb_port}"
        protocol = "tcp"
        cidr_blocks = ["172.16.0.0/16"]
    }
    egress {
        from_port = 0
        to_port = 0
        protocol = "-1"
        cidr_blocks = ["0.0.0.0/0"]
    }
    lifecycle {
        create_before_destroy = true
    }
}

