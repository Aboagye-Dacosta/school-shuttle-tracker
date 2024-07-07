import 'location_model.dart';

class BusModel {
  late final String driverId;
  late final String busId;
  late final String status;
  late final String busImg;
  late final Destination destinationOne;
  late final Destination destinationTwo;

  BusModel(this.driverId, this.busId, this.status, this.busImg,
      this.destinationOne, this.destinationTwo);

  BusModel.fromJson(Map<String, dynamic> bus) {
    driverId = bus["driverId"];
    busId = bus["busId"];
    status = bus["status"];
    busImg = bus["image"] ?? "";
    destinationOne = Destination.fromJson({
      "destination": bus["destinationOne"]["destination"],
      "coordinate": bus["destinationOne"]["coordinate"],
    });
    destinationTwo = Destination.fromJson({
      "destination": bus["destinationTwo"]["destination"],
      "coordinate": bus["destinationTwo"]["coordinate"],
    });
  }
}
