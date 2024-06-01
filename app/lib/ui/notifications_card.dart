import "package:app/presentation/colors.dart";
import "package:flutter/material.dart";

import "../presentation/sizing.dart";

class NotificationCard extends StatelessWidget {
  const NotificationCard({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Card(
      color: AppColors.white,
      child: Row(
        children: [
          const SizedBox(width: AppSizing.s_4),
          Image.asset(
            "assets/images/notification.png",
            width: AppSizing.h_54,
          ),
          Flexible(
            child: Text(
              "Something from the administrator",
              softWrap: true,
              style: Theme.of(context).textTheme.bodyMedium,
            ),
          )
        ],
      ),
    );
  }
}
