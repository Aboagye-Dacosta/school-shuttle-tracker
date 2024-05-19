import "package:app/presentation/colors.dart";
import "package:app/presentation/sizing.dart";
import "package:app/ui/app_bar.dart";
import "package:app/ui/space.dart";
import "package:flutter/material.dart";

class BusListings extends StatelessWidget {
  const BusListings({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        backgroundColor: AppColors.white,
        body: SafeArea(
          child: Padding(
            padding: const EdgeInsets.symmetric(
              vertical: AppSizing.h_16,
              horizontal: AppSizing.h_32,
            ),
            child: Column(
              children: [
                const CustomAppBar(
                  appTitle: "Bus Listings",
                ),
                const Space(),
                Expanded(
                    child: ListView.separated(
                        itemBuilder: (context, _) => Card(
                              color: AppColors.greyLight,
                              child: Padding(
                                padding: const EdgeInsets.all(AppPadding.p_16),
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Text(
                                      "K0893-Gh",
                                      style: Theme.of(context)
                                          .textTheme
                                          .headlineSmall!
                                          .copyWith(
                                              fontWeight: FontWeight.bold,
                                              fontSize: AppFontSizes.fs_16,
                                              color: AppColors.primary),
                                    ),
                                    const Space(
                                      height: AppSizing.h_8,
                                    ),
                                    Row(
                                      children: [
                                        Container(
                                          height: AppSizing.h_16,
                                          width: AppSizing.h_16,
                                          decoration: BoxDecoration(
                                              color: AppColors.red,
                                              borderRadius:
                                                  BorderRadius.circular(
                                                      AppSizing.h_16)),
                                        ),
                                        const Space(
                                          height: 0,
                                          width: AppSizing.h_8,
                                        ),
                                        Text(
                                          "Inactive",
                                          style: Theme.of(context)
                                              .textTheme
                                              .bodySmall,
                                        )
                                      ],
                                    ),
                                    const Space(
                                      height: AppSizing.h_8,
                                    ),
                                    Text(
                                      "Destinations",
                                      style: Theme.of(context)
                                          .textTheme
                                          .bodyMedium!
                                          .copyWith(
                                              fontWeight: FontWeight.bold),
                                    ),
                                    const Space(
                                      height: AppSizing.h_8,
                                    ),
                                    const Row(
                                      children: [
                                        DestinationCard(
                                          destination: "Katanga",
                                        ),
                                        Space(
                                          height: 0,
                                          width: AppSizing.h_8,
                                        ),
                                        DestinationCard(
                                          destination: "Independence hall",
                                        ),
                                      ],
                                    )
                                  ],
                                ),
                              ),
                            ),
                        separatorBuilder: (context, _) => const Space(
                              height: AppSizing.h_24,
                            ),
                        itemCount: 5))
              ],
            ),
          ),
        ));
  }
}

class DestinationCard extends StatelessWidget {
  final String destination;
  const DestinationCard({super.key, required this.destination});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(AppPadding.p_8 / 2),
      decoration: BoxDecoration(color: AppColors.primary),
      child: Text(
        destination,
        style: Theme.of(context).textTheme.bodySmall!.copyWith(
              fontWeight: FontWeight.bold,
              color: Theme.of(context).primaryColor,
            ),
      ),
    );
  }
}
