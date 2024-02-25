const datas = [
      {"id": 1, "image": "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=", "name": "Dr. John Doe", "specialty": "Cardiology"},
      {"id": 2, "image": "https://media.istockphoto.com/id/1470505351/photo/portrait-of-a-smiling-doctor-holding-glasses-and-a-mobile-phone-at-the-office.jpg?b=1&s=612x612&w=0&k=20&c=YqkjU0uI2UvEqPpyt4lQPcK9bt-OiC7WnrVmrpEtzjs=", "name": "Dr. Jane Smith", "specialty": "Dermatology"},
      {"id": 3, "image": "https://familydoctor.org/wp-content/uploads/2018/02/41808433_l.jpg", "name": "Dr. Michael Johnson", "specialty": "Neurology"},
      {"id": 4, "image": "https://imageio.forbes.com/specials-images/imageserve/6585f041726d41ad06fc603a/Stressed-doctor-working-on-a-digital-tablet-in-hospital-with-medical-equipment-after/960x0.jpg?format=jpg&width=960", "name": "Dr. Emily Williams", "specialty": "Orthopedics"},
      {"id": 5, "image": "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=", "name": "Dr. David Brown", "specialty": "Pediatrics"},
      {"id": 6, "image": "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=", "name": "Dr. Sarah Davis", "specialty": "Psychiatry"},
      {"id": 7, "image": "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=", "name": "Dr. Christopher Miller", "specialty": "Surgery"},
      {"id": 8, "image": "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=", "name": "Dr. Jessica Wilson", "specialty": "Oncology"},
      {"id": 9, "image": "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=", "name": "Dr. Matthew Moore", "specialty": "Gynecology"},
      {"id": 10, "image": "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=", "name": "Dr. Amanda Taylor", "specialty": "Urology"},
      {"id": 11, "image": "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=", "name": "Dr. John Doe", "specialty": "Cardiology"},
      {"id": 12, "image": "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=", "name": "Dr. Jane Smith", "specialty": "Dermatology"},
      {"id": 13, "image": "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=", "name": "Dr. Michael Johnson", "specialty": "Neurology"},
      {"id": 14, "image": "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=", "name": "Dr. Emily Williams", "specialty": "Orthopedics"},
      {"id": 15, "image": "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=", "name": "Dr. David Brown", "specialty": "Pediatrics"},
      {"id": 16, "image": "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=", "name": "Dr. Sarah Davis", "specialty": "Psychiatry"},
      {"id": 17, "image": "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=", "name": "Dr. Christopher Miller", "specialty": "Surgery"},
      {"id": 18, "image": "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=", "name": "Dr. Jessica Wilson", "specialty": "Oncology"},
      {"id": 19, "image": "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=", "name": "Dr. Matthew Moore", "specialty": "Gynecology"},
      {"id": 20, "image": "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=", "name": "Dr. Amanda Taylor", "specialty": "Urology"},
      {"id": 21, "image": "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=", "name": "Dr. John Doe", "specialty": "Cardiology"},
      {"id": 22, "image": "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=", "name": "Dr. Jane Smith", "specialty": "Dermatology"},
      {"id": 23, "image": "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=", "name": "Dr. Michael Johnson", "specialty": "Neurology"},
      {"id": 24, "image": "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=", "name": "Dr. Emily Williams", "specialty": "Orthopedics"},
      {"id": 25, "image": "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=", "name": "Dr. David Brown", "specialty": "Pediatrics"}
    ];

export default datas;
    