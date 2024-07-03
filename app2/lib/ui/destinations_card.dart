import 'package:app2/controllers/page_switch_controller.dart';
import 'package:app2/pages/student/destinations/route_listings.dart';
import 'package:app2/ui/space.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

import '../presentation/colors.dart';
import '../presentation/sizing.dart';

class DestinationsCard extends StatelessWidget {
  DestinationsCard({
    super.key,
  });

  final pageController = Get.put(PageSwitchController());

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: () {
        pageController.setPage(RouteListings.pageName);
      },
      child: Container(
        decoration: BoxDecoration(  
        color: AppColors.grey_700,
          borderRadius: BorderRadius.circular(AppSizing.h_8)
        ),
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
      ),
    );
  }
}
