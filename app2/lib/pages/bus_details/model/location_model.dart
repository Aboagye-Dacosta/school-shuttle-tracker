class BusLocation {
  late final String busId;
  late final Destination destinationOne;
  late final Destination destinationTwo;

  BusLocation(this.busId, this.destinationOne, this.destinationTwo);

  BusLocation.fromJson(Map<String, dynamic> location) {
    busId = location["busId"] ?? "";
    destinationOne = Destination.fromJson(location["destinationOne"]);
    destinationTwo = Destination.fromJson(location["destinationTwo"]);
  }
}

class Destination {
  late final String destination;
  late final String coordinate;

  Destination(this.destination, this.coordinate);

  Destination.fromJson(Map<String, String> destination) {
    coordinate = destination["coordinate"] ?? "";
    this.destination = destination["destination"] ?? "";
  }
}
