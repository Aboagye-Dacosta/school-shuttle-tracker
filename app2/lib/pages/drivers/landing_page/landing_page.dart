import 'package:app2/pages/bus_details/controller/bus_controller.dart';
import 'package:app2/presentation/colors.dart';
import 'package:app2/ui/custom_empty_list_card.dart';
import 'package:app2/ui/select_input_field.dart';
import 'package:app2/ui/space.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:get/get.dart';

import '../../../controllers/page_switch_controller.dart';
import '../../../ui/button.dart';
import '../../bus_details/bus_details.dart';
import 'controller/destinations_controller.dart';
import 'controller/drivers_controller.dart';
import 'controller/saved_locations_controller.dart';

class DriverLandingPage extends StatelessWidget {
  DriverLandingPage({super.key});

  static const routeName = "home";

  final driversController = Get.put<DriverController>(DriverController());
  final busController = Get.put<BusController>(BusController());
  final destinationsController =
      Get.put<DestinationsController>(DestinationsController());
  final savedBusLocationsController = Get.put<SavedLocations>(SavedLocations());
  final pageSwitchController =
      Get.put<PageSwitchController>(PageSwitchController());

  @override
  Widget build(BuildContext context) {
    return Obx(() {
      return Stack(
        alignment: Alignment.center,
        children: [
          SingleChildScrollView(
            child: Padding(
              padding: const EdgeInsets.all(24),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  GridView.count(
                    shrinkWrap: true,
                    childAspectRatio: 2 / 1,
                    physics: const NeverScrollableScrollPhysics(),
                    crossAxisSpacing: 16,
                    crossAxisCount: 2,
                    children: [
                      _busDetailAndSettingCard(context,
                          icon: SvgPicture.asset(
                            "assets/images/icons/icon-bus-one.svg",
                            width: 32,
                            height: 18,
                          ),
                          label: "Bus Details", onPressed: () {
                        pageSwitchController.setPage(BusDetails.pageName);
                      }),
                      _busDetailAndSettingCard(
                        context,
                        icon: InfiniteAnimation(
                          durationInSeconds: 4,
                          child: SvgPicture.asset(
                            "assets/images/icons/icon-settings.svg",
                            width: 32,
                          ),
                        ),
                        label: "Bus Settings",
                      ),
                    ],
                  ),
                  const Space(),
                  _locationActivationCard(context,
                      startLocation: driversController.isLoadingDriver.value ||
                              busController.isLoadingBus.value
                          ? "loading"
                          : destinationsController
                              .startLocation.value.destination,
                      destination: driversController.isLoadingDriver.value ||
                              busController.isLoadingBus.value
                          ? "loading"
                          : destinationsController
                              .destination.value.destination,
                      isLoading: driversController.isLoadingDriver.value),
                  const Space(),
                  ConstrainedBox(
                    constraints:
                        const BoxConstraints(minWidth: double.infinity),
                    child: ElevatedButton(
                      style: ElevatedButton.styleFrom(
                          shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(8))),
                      onPressed: () {},
                      child: const Text("Check location on map"),
                    ),
                  ),
                  const Space(
                    height: 42,
                  ),
                  Divider(
                    color: AppColors.primaryAccent,
                    thickness: 0.5,
                  ),
                  const Space(
                    height: 42,
                  ),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: [
                      Text(
                        "Destinations",
                        style:
                            Theme.of(context).textTheme.headlineSmall!.copyWith(
                                  fontSize: 12,
                                  fontWeight: FontWeight.bold,
                                  color: AppColors.grey_800,
                                ),
                      ),
                      ElevatedButton(
                          onPressed: () {
                            if (destinationsController.editable.value ==
                                    false &&
                                !Get.isSnackbarOpen) {
                              Get.snackbar(
                                "Edit Location",
                                "Are you sure want to edit location",
                                backgroundColor: AppColors.grey_200,
                                isDismissible: true,
                                dismissDirection: DismissDirection.startToEnd,
                                animationDuration:
                                    const Duration(milliseconds: 200),
                                duration: const Duration(seconds: 7),
                                mainButton: TextButton(
                                  onPressed: () {
                                    destinationsController.setEditable(true);
                                    Get.closeCurrentSnackbar();
                                  },
                                  child: const Text("Continue"),
                                ),
                                snackPosition: SnackPosition.BOTTOM,
                              );
                            } else {
                              destinationsController.setEditable(false);
                            }
                          },
                          child: Text(destinationsController.editable.value
                              ? "Cancel"
                              : "Edit"))
                    ],
                  ),
                  const Space(
                    height: 12,
                  ),
                  SelectTextField(
                    label: "Choose start location",
                    isEnabled: destinationsController.editable.value,
                    controller: destinationsController.startLocationController,
                    items: destinationsController.locations,
                    onChange: (value) =>
                        destinationsController.setStartLocation(value.value),
                  ),
                  const Space(),
                  SelectTextField(
                    isEnabled: destinationsController.editable.value,
                    label: "Choose destination",
                    controller:
                        destinationsController.destinationLocationController,
                    items: destinationsController.locations,
                    onChange: (value) => destinationsController
                        .setDestinationLocation(value.value),
                  ),
                  const Space(),
                  Button(
                    label: "Remember location",
                    onPressed: () {},
                  ),
                  const Space(
                    height: 42,
                  ),
                  Text(
                    "Saved Locations",
                    style: Theme.of(context).textTheme.headlineSmall!.copyWith(
                          fontSize: 12,
                          fontWeight: FontWeight.bold,
                          color: AppColors.grey_800,
                        ),
                  ),
                  const Space(),
                  Obx(() => savedBusLocationsController.isLoading.value
                      ? const Center(
                          child: CircularProgressIndicator(),
                        )
                      : !savedBusLocationsController.isLoading.value &&
                              savedBusLocationsController
                                  .savedBusLocations.isEmpty
                          ? const CustomEmptyListCard(
                              titleMessage: "No Locations saved yet",
                              descriptionMessage:
                                  "You have not saved andy locations yet.You can save locations by licking on the save location button for easy access")
                          : Container())
                ],
              ),
            ),
          ),
          if (driversController.isLoadingDriver.value ||
              busController.isLoadingBus.value)
            Container(
              color: AppColors.grey_200.withOpacity(0.7),
              width: double.infinity,
              height: MediaQuery.of(context).size.height,
              child: const Center(
                  child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  CircularProgressIndicator(strokeWidth: 5),
                  SizedBox(
                    height: 8,
                  ),
                  Text("Getting everything ready ...")
                ],
              )),
            )
        ],
      );
    });
  }

  Widget _locationActivationCard(
    BuildContext context, {
    required String startLocation,
    required String destination,
    required bool isLoading,
  }) {
    return Container(
      width: double.infinity,
      decoration: BoxDecoration(
          color: AppColors.primaryAccent,
          image: const DecorationImage(
            image: AssetImage("assets/images/background/bg-vertical-right.png"),
            fit: BoxFit.cover,
            opacity: 0.2,
          ),
          boxShadow: [
            BoxShadow(
              color: AppColors.grey_200,
              offset: const Offset(0.6, 0.7),
              blurRadius: 2,
            )
          ],
          borderRadius: BorderRadius.circular(16)),
      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 16),
      child: Row(
        children: [
          Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              InkWell(
                onTap: () {},
                child: Container(
                  width: 60,
                  height: 60,
                  decoration: BoxDecoration(
                      color: AppColors.primary,
                      borderRadius: BorderRadius.circular(30)),
                  child: Center(
                    child: Icon(
                      Icons.power_settings_new_sharp,
                      color: AppColors.grey_0,
                    ),
                  ),
                ),
              ),
              const Space(
                height: 8,
              ),
              Text(
                "Activate Location",
                style: Theme.of(context).textTheme.headlineSmall!.copyWith(
                    fontWeight: FontWeight.bold,
                    color: AppColors.grey_0,
                    fontSize: 10),
              )
            ],
          ),
          const SizedBox(
            width: 8,
          ),
          Expanded(
            flex: 1,
            child: Container(
              color: AppColors.grey_0.withOpacity(0.5),
              padding: const EdgeInsets.all(8.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  _displayLocation(context,
                      type: "Start", label: startLocation),
                  Divider(
                    color: AppColors.primaryAccent,
                  ),
                  _displayLocation(context,
                      type: "Destination", label: destination)
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  SizedBox _displayLocation(BuildContext context,
      {required String type, required String label}) {
    return SizedBox(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            "$type Location",
            style: Theme.of(context).textTheme.headlineSmall!.copyWith(
                fontWeight: FontWeight.bold,
                color: AppColors.grey_0,
                fontSize: 12),
          ),
          const Space(
            height: 4,
          ),
          Row(
            children: [
              SvgPicture.asset(
                "assets/images/icons/icon-route.svg",
                width: 16,
              ),
              const SizedBox(
                width: 8,
              ),
              Text(
                label.isEmpty ? "No location assigned yet" : label,
                style: Theme.of(context)
                    .textTheme
                    .bodySmall!
                    .copyWith(color: AppColors.grey_800, fontSize: 12),
              ),
            ],
          )
        ],
      ),
    );
  }

  InkWell _busDetailAndSettingCard(BuildContext context,
      {required Widget icon,
      required String label,
      void Function()? onPressed}) {
    return InkWell(
      onTap: onPressed,
      child: Container(
        width: double.infinity,
        decoration: BoxDecoration(color: AppColors.grey_0, boxShadow: [
          BoxShadow(
            color: AppColors.grey_200,
            offset: const Offset(0.6, 0.7),
            blurRadius: 2,
          )
        ]),
        padding: const EdgeInsets.all(8.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            icon,
            Text(
              label,
              style: Theme.of(context).textTheme.bodySmall!.copyWith(
                    color: AppColors.grey_800,
                  ),
            ),
          ],
        ),
      ),
    );
  }
}

class InfiniteAnimation extends StatefulWidget {
  final Widget child;
  final int durationInSeconds;

  const InfiniteAnimation({
    super.key,
    required this.child,
    this.durationInSeconds = 2,
  });

  @override
  _InfiniteAnimationState createState() => _InfiniteAnimationState();
}

class _InfiniteAnimationState extends State<InfiniteAnimation>
    with SingleTickerProviderStateMixin {
  late AnimationController animationController;
  late Animation<double> animation;

  @override
  void initState() {
    super.initState();
    animationController = AnimationController(
      vsync: this,
      duration: Duration(seconds: widget.durationInSeconds),
    );
    animation = Tween<double>(
      begin: 0,
      end: 12.5664, // 2Radians (360 degrees)
    ).animate(animationController);

    animationController.forward();

    animation.addStatusListener((status) {
      if (status == AnimationStatus.completed) {
        animationController.repeat();
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: animationController,
      builder: (context, child) => Transform.rotate(
        angle: animation.value,
        child: widget.child,
      ),
    );
  }

  @override
  void dispose() {
    animationController.dispose();
    super.dispose();
  }
}
