import "package:app/presentation/colors.dart";
import "package:app/presentation/sizing.dart";
import "package:app/ui/app_bar.dart";
import "package:app/ui/bus_usage_card.dart";
import "package:app/ui/carousel_card.dart";
import "package:app/ui/destinations_card.dart";
import "package:app/ui/notifications_card.dart";
import "package:app/ui/space.dart";
import "package:flutter/material.dart";

class Home extends StatelessWidget {
  const Home({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.white,
      body: Column(
        children: [
          const CustomAppBar(appTitle: "BusTracking"),
          const Space(),
          Expanded(
            
            child: SingleChildScrollView(
              child: Column(
                mainAxisSize: MainAxisSize.max,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const BusCarousel(),
                  const Space(),
                  const NotificationCard(),
                  const Space(),
                  const DestinationsCard(),
                  const Space(),
                  Text(
                    "Recent Bus Usage",
                    style: Theme.of(context).textTheme.headlineSmall!.copyWith(
                        fontWeight: FontWeight.bold,
                        fontSize: AppFontSizes.fs_16),
                  ),
                  const Space(),
                  ListView.separated(
                      shrinkWrap: true,
                      itemBuilder: (BuildContext context, index) =>
                          const BusUsageCard(),
                      separatorBuilder: (BuildContext context, _) =>
                          const Space(
                            height: AppSizing.h_24,
                          ),
                      itemCount: 5,
                      physics: const NeverScrollableScrollPhysics(),
                      )
                ],
              ),
            ),
          )
        ],
      ),
    );
  }
}
