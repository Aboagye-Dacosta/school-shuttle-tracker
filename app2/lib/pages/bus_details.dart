import 'package:app2/presentation/sizing.dart';
import 'package:app2/ui/app_bar.dart';
import 'package:app2/ui/space.dart';
import 'package:flutter/material.dart';

class BusDetails extends StatelessWidget {
  const BusDetails({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.symmetric(
            vertical: AppSizing.h_16,
            horizontal: AppSizing.h_32,
          ),
          child: Column(
            children: [
              const CustomAppBar(
                appTitle: "Bus Details",
                hasBackBtn: true,
              ),
              const Space(),
              Expanded(
                child: Image.asset("assets/images/bus.png"),
              ),
              const Space(),
              Expanded(
                child: Column(
                  children: [
                    Text("Bus Type",
                        style: Theme.of(context)
                            .textTheme
                            .headlineSmall!
                            .copyWith(fontSize: AppFontSizes.fs_16)),
                    const Flexible(
                      child: Text(
                        "I must kill Xu Mu. He is only at the Corporeal Yang stage and is already so powerful. Once he reaches the Nirvana Scryer stage, I will not be his opponent!",
                      ),
                    ),
                    const Space(),
                    Text("Destinations",
                        style: Theme.of(context).textTheme.headlineSmall)
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
