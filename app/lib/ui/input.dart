import "package:app/presentation/colors.dart";
import "package:app/presentation/sizing.dart";
import "package:flutter/material.dart";

class Input extends StatefulWidget {
  final TextEditingController controller;
  final String label;
  final TextInputType type;
  final TextAlign align;
  final bool hidden;
  const Input({
    super.key,
    required this.controller,
    required this.label,
    this.type = TextInputType.text,
    this.align = TextAlign.start,
    this.hidden = false,
  });

  @override
  State<Input> createState() => _InputState();
}

class _InputState extends State<Input> {
  @override
  Widget build(BuildContext context) {
    return TextFormField(
      controller: widget.controller,
      keyboardType: widget.type,
      textAlign: widget.align,
      obscureText: widget.hidden,
      
      decoration: InputDecoration(
        fillColor: AppColors.greyLight,
        
        filled: true,
        labelStyle: const TextStyle(fontSize: AppFontSizes.fs_12),
        label: Text(widget.label),
        contentPadding: const EdgeInsets.symmetric(horizontal: AppSizing.h_8),
        border: OutlineInputBorder(
            borderSide: BorderSide.none,
            borderRadius: BorderRadius.circular(AppSizing.h_8)),
      ),
    );
  }
}
