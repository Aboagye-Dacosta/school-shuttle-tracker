class DriverModel {
  late final String driverId;
  late final String name;
  late final String email;
  late final String? image;

  DriverModel(this.driverId, this.name, this.email, this.image);

  DriverModel.fromJson(Map<String, dynamic> driver) {
    driverId = driver["driverId"];
    name = driver["name"];
    email = driver["email"];
    image = driver["image"];
  }
}
