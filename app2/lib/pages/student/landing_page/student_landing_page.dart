import 'package:app2/presentation/sizing.dart';
import 'package:app2/ui/carousel_card.dart';
import 'package:app2/ui/destinations_card.dart';
import 'package:app2/ui/space.dart';
import 'package:flutter/material.dart';

class StudentLandingPage extends StatelessWidget {
  const StudentLandingPage({super.key});

  static String pageName = "home";

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(
          horizontal: AppPadding.p_24, vertical: AppPadding.p_16),
      child: SingleChildScrollView(
        child: Column(
          children: [
            const BusCarousel(),
            const Space(),
            DestinationsCard(),
          ],
        ),
      ),
    );
  }
}
