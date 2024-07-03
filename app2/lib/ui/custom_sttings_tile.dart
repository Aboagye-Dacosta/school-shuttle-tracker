import 'package:app2/presentation/colors.dart';
import 'package:app2/presentation/sizing.dart';
import 'package:flutter/material.dart';

class SettingTile extends StatelessWidget {
  final IconData icon;
  final String label;
  final void Function() onPress;
  final String? tab;
  final String selectedTab;
  const SettingTile({
    super.key,
    required this.icon,
    required this.label,
    required this.onPress,
    this.tab,
    required this.selectedTab,
  });

  @override
  Widget build(BuildContext context) {
    var isSelcted = selectedTab == tab;
    return Container(
      margin: const EdgeInsets.symmetric(vertical: AppSizing.s_4),
      padding: const EdgeInsets.symmetric(
          vertical: AppPadding.p_4, horizontal: AppPadding.p_8),
      decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(AppSizing.h_16),
          color: isSelcted ? AppColors.white : Colors.transparent),
      child: ListTile(
        onTap: onPress,
        title: Text(label,
            style: TextStyle(
                color: isSelcted ? AppColors.grey_900 : AppColors.grey_300,
                fontWeight: isSelcted ? FontWeight.bold : FontWeight.normal)),
        leading: Icon(
          icon,
          color: isSelcted ? AppColors.primary : AppColors.grey_800,
        ),
      ),
    );
  }
}
