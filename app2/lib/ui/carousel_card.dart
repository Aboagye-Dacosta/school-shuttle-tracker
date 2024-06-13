import 'package:app2/presentation/sizing.dart';
import 'package:carousel_slider/carousel_slider.dart';
import 'package:flutter/material.dart';
import 'package:infinite_carousel/infinite_carousel.dart';

List<String> images =
    List.generate(10, (index) => "assets/images/bus-$index.jpg");

class BusCarousel extends StatefulWidget {
  const BusCarousel({
    super.key,
  });

  @override
  State<BusCarousel> createState() => _BusCarouselState();
}

class _BusCarouselState extends State<BusCarousel> {
  final bool _loop = true;

  // Scroll controller for carousel
  late InfiniteScrollController _controller;

  // Maintain current index of carousel
  int _selectedIndex = 0;

  // Width of each item
  double? _itemExtent;

  // Get screen width of viewport.
  double get screenWidth => MediaQuery.of(context).size.width;

  @override
  void initState() {
    super.initState();
    _controller = InfiniteScrollController(initialItem: _selectedIndex);
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    _itemExtent = screenWidth - 100;
  }

  @override
  void dispose() {
    super.dispose();
    _controller.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return CarouselSlider(
      options: CarouselOptions(
        autoPlay: true,
        padEnds: true,

      ),
      items: images
          .map(
            (image) => Container(
              margin: const EdgeInsets.symmetric(horizontal: AppSizing.s_4),
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(5),
                boxShadow: kElevationToShadow[2],
                image: DecorationImage(
                  image: AssetImage(image),
                  fit: BoxFit.fill,
                ),
              ),
            ),
          )
          .toList(),
    );
  }
}


//  SizedBox(
//       height: 200,
//       child: InfiniteCarousel.builder(
//         physics: AlwaysScrollableScrollPhysics(),
//         itemCount: images.length,
//         itemExtent: _itemExtent ?? 40,
//         scrollBehavior: kIsWeb
//             ? ScrollConfiguration.of(context).copyWith(
//                 dragDevices: {
//                   // Allows to swipe in web browsers
//                   PointerDeviceKind.touch,
//                   PointerDeviceKind.mouse
//                 },
//               )
//             : null,
//         loop: _loop,
//         controller: _controller,
//         onIndexChanged: (index) {
//           if (_selectedIndex != index) {
//             setState(() {
//               _selectedIndex = index;
//             });
//           }
//         },
//         itemBuilder: (context, itemIndex, realIndex) {
//           return Padding(
//             padding: const EdgeInsets.symmetric(horizontal: 10.0),
//             child: GestureDetector(
//               onTap: () {
//                 _controller.animateToItem(realIndex);
//               },
//               child: Container(
//                 decoration: BoxDecoration(
//                   borderRadius: BorderRadius.circular(5),
//                   boxShadow: kElevationToShadow[2],
//                   image: DecorationImage(
//                     image: AssetImage(images[itemIndex]),
//                     fit: BoxFit.fill,
//                   ),
//                 ),
//               ),
//             ),
//           );
//         },
//       ),
//     );