import 'package:dropdown_textfield/dropdown_textfield.dart';
import 'package:get/get.dart';

import '../../../bus_details/model/location_model.dart';

class DestinationsController extends GetxController {
  Rx<Destination> startLocation = Destination("", "").obs;
  Rx<Destination> destination = Destination("", "").obs;

  RxList<Destination> locations = List<Destination>.empty(growable: true).obs;
  RxBool editable = false.obs;

  SingleValueDropDownController startLocationController =
      SingleValueDropDownController();
  SingleValueDropDownController destinationLocationController =
      SingleValueDropDownController();

  @override
  onInit() {
    getLocations();
    super.onInit();
  }

  void setEditable(bool isEditable) {
    editable.value = isEditable;
  }

  void setStartLocation(Destination value) {
    startLocation.value = value;
  }

  void setDestinationLocation(Destination value) {
    destination.value = value;
  }

  getInitialLocation(Destination destinationOne, Destination destinationTwo) {
    startLocation.value = destinationOne;
    destination.value = destinationTwo;

    startLocationController.dropDownValue = DropDownValueModel(
        name: destinationOne.destination, value: destinationOne);
    destinationLocationController.dropDownValue = DropDownValueModel(
        value: destinationTwo, name: destinationTwo.destination);
  }

  Future<void> getLocations() async {
    locations.value = [
      Destination("Katanga", "93483940"),
      Destination("IndependenceHall", "98938493"),
      Destination("Commercial area", "98938493"),
      Destination("College Of Science", "98938493"),
    ];
  }
}
