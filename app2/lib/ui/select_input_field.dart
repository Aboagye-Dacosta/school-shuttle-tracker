import 'package:dropdown_textfield/dropdown_textfield.dart';
import 'package:flutter/material.dart';

import '../pages/bus_details/model/location_model.dart';
import '../presentation/sizing.dart';

class SelectTextField extends StatelessWidget {
  final String? Function(String? str)? validate;
  final SingleValueDropDownController controller;
  final List<Destination> items;
  final String label;
  final bool isEnabled;
  final void Function(dynamic string)? onChange;
  final Map<String, String>? initialValue;

  const SelectTextField(
      {super.key,
      this.validate,
      this.onChange,
      this.isEnabled = true,
      required this.controller,
      required this.label,
      required this.items,
      this.initialValue});

  @override
  Widget build(BuildContext context) {
    return DropDownTextField(
        initialValue: initialValue,
        isEnabled: isEnabled,
        validator: validate,
        onChanged: onChange,
        controller: controller,
        enableSearch: true,
        dropdownRadius: AppSizing.h_8,
        padding: const EdgeInsets.symmetric(vertical: 4, horizontal: 8),
        textFieldDecoration: InputDecoration(
          labelText: label,
          fillColor: Colors.transparent,
          border: OutlineInputBorder(
              borderSide: const BorderSide(width: AppSizing.s_2),
              borderRadius: BorderRadius.circular(AppSizing.h_8)),
        ),
        dropDownList: items
            .map((item) => DropDownValueModel(name: item.destination, value: item))
            .toList());
  }
}
