import 'package:app2/pages/drivers/landing_page/controller/drivers_controller.dart';
import 'package:app2/presentation/colors.dart';
import 'package:app2/presentation/sizing.dart';
import 'package:app2/ui/button.dart';
import 'package:app2/ui/space.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

import 'controller/bus_controller.dart';

class BusDetails extends StatelessWidget {
  BusDetails({super.key});

  static String pageName = "busDetail";

  final busController = Get.put<BusController>(BusController());
  final driverController = Get.put<DriverController>(DriverController());

  @override
  Widget build(BuildContext context) {
    return Obx(() => SingleChildScrollView(
          child: Padding(
            padding: const EdgeInsets.symmetric(
              vertical: AppSizing.h_24,
              horizontal: AppSizing.h_32,
            ),
            child: Column(
              children: [
                ConstrainedBox(
                  constraints: const BoxConstraints(minWidth: double.infinity),
                  child: ClipRRect(
                    borderRadius: BorderRadius.circular(24),
                    child: Image.asset(busController.bus.value.busImg),
                  ),
                ),
                const Space(),
                Table(
                  border: TableBorder.symmetric(
                    inside: BorderSide(
                      color: AppColors.grey_200,
                    ),
                  ),
                  children: [
                    TableRow(
                      decoration: BoxDecoration(
                        color: AppColors.grey_200,
                      ),
                      children: const [
                        TableCell(
                            child: Padding(
                          padding: EdgeInsets.all(8.0),
                          child: Text("Destinations"),
                        )),
                        TableCell(
                            child: Padding(
                          padding: EdgeInsets.all(8.0),
                          child: Text("GPS Coordinates"),
                        ))
                      ],
                    ),
                    TableRow(
                      decoration: BoxDecoration(
                        color: AppColors.grey_100,
                      ),
                      children: [
                        TableCell(
                            child: Padding(
                          padding: const EdgeInsets.all(8.0),
                          child: Text(busController
                              .bus.value.destinationOne.destination),
                        )),
                        TableCell(
                            child: Padding(
                          padding: const EdgeInsets.all(8.0),
                          child: Text(busController
                              .bus.value.destinationOne.coordinate),
                        ))
                      ],
                    ),
                    TableRow(
                      decoration: BoxDecoration(
                        color: AppColors.grey_100,
                      ),
                      children: [
                        TableCell(
                            child: Padding(
                          padding: const EdgeInsets.all(8.0),
                          child: Text(busController
                              .bus.value.destinationTwo.destination),
                        )),
                        TableCell(
                            child: Padding(
                          padding: const EdgeInsets.all(8.0),
                          child: Text(busController
                              .bus.value.destinationTwo.coordinate),
                        ))
                      ],
                    ),
                  ],
                ),
                const Space(),
                Divider(
                  color: AppColors.primaryAccent,
                  thickness: 0.5,
                ),
                const Space(),
                Table(
                  border: TableBorder.symmetric(
                    inside: BorderSide(
                      color: AppColors.grey_200,
                    ),
                  ),
                  children: [
                    TableRow(
                      decoration: BoxDecoration(
                        color: AppColors.grey_200,
                      ),
                      children: const [
                        TableCell(
                            child: Padding(
                          padding: EdgeInsets.all(8.0),
                          child: Text("Others"),
                        )),
                        TableCell(
                            child: Padding(
                          padding: EdgeInsets.all(8.0),
                          child: Text("Value"),
                        ))
                      ],
                    ),
                    TableRow(
                      decoration: BoxDecoration(
                        color: AppColors.grey_100,
                      ),
                      children: [
                        TableCell(
                            child: Padding(
                          padding: const EdgeInsets.all(8.0),
                          child: Text("Driver"),
                        )),
                        TableCell(
                            child: Padding(
                          padding: const EdgeInsets.all(8.0),
                          child: Text(driverController.driver.value.name),
                        ))
                      ],
                    ),
                    TableRow(
                      decoration: BoxDecoration(
                        color: AppColors.grey_100,
                      ),
                      children: [
                        TableCell(
                            child: Padding(
                          padding: const EdgeInsets.all(8.0),
                          child: Text("Bus Status"),
                        )),
                        TableCell(
                            child: Padding(
                          padding: const EdgeInsets.all(8.0),
                          child: Row(
                            children: [
                              busController.bus.value.status == "active"
                                  ? Container(
                                      width: 20,
                                      height: 20,
                                      decoration: BoxDecoration(
                                          color: AppColors.yellow,
                                          borderRadius:
                                              BorderRadius.circular(10)),
                                    )
                                  : Container(
                                      width: 20,
                                      height: 20,
                                      decoration: BoxDecoration(
                                          color: AppColors.primary,
                                          borderRadius:
                                              BorderRadius.circular(10)),
                                    ),
                              const SizedBox(
                                width: 8,
                              ),
                              Text(
                                  busController.bus.value.status.toUpperCase()),
                            ],
                          ),
                        ))
                      ],
                    ),
                  ],
                ),
                const Space(
                  height: 54,
                ),
                Button(
                  label: "Track on map",
                  onPressed: () {},
                )
              ],
            ),
          ),
        ));
  }
}
