import 'package:app/ui/space.dart';
import 'package:flutter/material.dart';

import '../presentation/colors.dart';
import '../presentation/sizing.dart';



class DestinationsCard extends StatelessWidget {
  const DestinationsCard({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Card(
      color: AppColors.primary,
      child: SizedBox(
        width: double.infinity,
        child: Stack(
          clipBehavior: Clip.none,
          children: [
            Positioned(
              top: -30,
              child: Image.asset(
                "assets/images/destinations.png",
                width: AppSizing.h_120,
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(AppPadding.p_16),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text(
                        "Want a ride",
                        style: Theme.of(context)
                            .textTheme
                            .headlineSmall!
                            .copyWith(
                                fontWeight: FontWeight.bold,
                                color: AppColors.white),
                      ),
                      Icon(Icons.arrow_forward_ios,
                          color: AppColors.greyLight, size: AppSizing.h_16),
                    ],
                  ),
                  const Space(
                    height: AppSizing.h_8,
                  ),
                  Text(
                    "Check the destinations listings and find where you want to go",
                    style: Theme.of(context).textTheme.bodyMedium!.copyWith(
                        color: Theme.of(context).primaryColor,
                        fontWeight: FontWeight.w500),
                  ),
                ],
              ),
            )
          ],
        ),
      ),
    );
  }
}
