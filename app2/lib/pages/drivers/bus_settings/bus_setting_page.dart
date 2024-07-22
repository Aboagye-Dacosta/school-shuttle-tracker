import 'package:app2/ui/button.dart';
import 'package:app2/ui/select_input_field.dart';
import 'package:app2/ui/space.dart';
import 'package:dropdown_textfield/dropdown_textfield.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

import '../../bus_details/controller/bus_controller.dart';
import '../landing_page/controller/destinations_controller.dart';

class BusSettingsPage extends StatefulWidget {
  const BusSettingsPage({super.key});

  static String pageName = "settings";

  @override
  State<BusSettingsPage> createState() => _BusSettingsPageState();
}

class _BusSettingsPageState extends State<BusSettingsPage> {
  final busController = Get.put(BusController());

  final destinationsController = Get.put(DestinationsController());
  bool isEditable = false;

  @override
  Widget build(BuildContext context) {
    final style = Theme.of(context).textTheme.headlineSmall!.copyWith(
          fontSize: 15,
          fontWeight: FontWeight.bold,
        );

    return Obx(() => Padding(
          padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 54),
          child: SingleChildScrollView(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text("Bus Number", style: style),
                const Space(height: 16),
                SelectTextField(
                  isEnabled: isEditable,
                  controller: SingleValueDropDownController(),
                  label: "Choose bus number",
                  items: busController.busNumberList
                      .map((element) =>
                          DropDownValueModel(name: element, value: element))
                      .toList(),
                ),
                const Space(),
                Text("Destination one", style: style),
                const Space(height: 16),
                SelectTextField(
                  isEnabled: isEditable,
                  label: "Choose destination",
                  controller:
                      destinationsController.destinationLocationController,
                  items: destinationsController.locations
                      .map((item) => DropDownValueModel(
                          name: item.destination, value: item))
                      .toList(),
                  onChange: (value) => destinationsController
                      .setDestinationLocation(value.value),
                ),
                const Space(),
                Text("Destination Two", style: style),
                const Space(height: 16),
                SelectTextField(
                  isEnabled: isEditable,
                  label: "Choose destination",
                  controller:
                      destinationsController.destinationLocationController,
                  items: destinationsController.locations
                      .map((item) => DropDownValueModel(
                          name: item.destination, value: item))
                      .toList(),
                  onChange: (value) => destinationsController
                      .setDestinationLocation(value.value),
                ),
                const Space(),
                if (!isEditable)
                  ConstrainedBox(
                    constraints:
                        const BoxConstraints(minWidth: double.infinity),
                    child: ElevatedButton(
                      onPressed: () {
                        if (!Get.isSnackbarOpen) {
                          setState(() {
                            Get.snackbar("Edit Settings",
                                "Are you sure you want to edit bus data",
                                snackPosition: SnackPosition.BOTTOM,
                                mainButton: TextButton(
                                    onPressed: () {
                                      setState(() {
                                        isEditable = true;
                                        Get.closeCurrentSnackbar();
                                      });
                                    },
                                    child: const Text("Continue")));
                          });
                        }
                      },
                      style: ElevatedButton.styleFrom(
                          padding: const EdgeInsets.all(16),
                          shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(8))),
                      child: const Text("Edit bus info"),
                    ),
                  ),
                if (isEditable)
                  Row(
                    children: [
                      Expanded(
                          child: ElevatedButton(
                              onPressed: () {
                                setState(() {
                                  isEditable = false;
                                });
                              },
                              style: ElevatedButton.styleFrom(
                                  padding: const EdgeInsets.all(16),
                                  shape: RoundedRectangleBorder(
                                      borderRadius: BorderRadius.circular(8))),
                              child: const Text("Cancel"))),
                      const SizedBox(width: 20),
                      Expanded(
                        flex: 2,
                        child: Button(
                          label: "Savwe Bus Info",
                          onPressed: () {},
                        ),
                      ),
                    ],
                  )
              ],
            ),
          ),
        ));
  }
}
