export const options = {
    scenarios: {

    /*Constant VUs (virtual users) executor:
    This executor allows you to specify a fixed number of VUs that will be maintained throughout the entire test duration. It's useful when you want to simulate a constant load on your system.

    Ramping VUs executor:
    With this executor, you can define a minimum and maximum number of VUs and a duration for ramping up from the minimum to the maximum. It gradually increases the number of VUs over time, simulating a realistic user load.

    Ramping Arrival Scenario (ramping_arrival_scenario):
    In a ramping_arrival_scenario, the load is increased by gradually increasing the rate at which new virtual users (VUs) arrive or start executing the scenario. Instead of increasing the number of VUs directly, you control the rate at which new VUs are spawned or created. This allows you to simulate a more realistic scenario where user arrivals gradually increase over time, similar to how real users may access a system. For example, you may start with 2 VUs arriving every second and increase it to 10 VUs arriving every second over a specified duration

    Constant Arrival Rate (CAR) executor:
    The CAR executor focuses on maintaining a constant arrival rate of new VUs per second. It adjusts the number of VUs based on how fast they complete their iterations, ensuring a steady flow of VUs over time.

    Per VU Iterations executor:
    This executor allows you to specify the exact number of iterations each VU should perform. It's useful when you want to control the precise workload for each VU.

    Shared iterations executor:
    The shared iterations executor allows you to specify a fixed number of iterations that will be shared among all the VUs. Each VU will iterate through the test until the total number of iterations is reached.

    You can choose the appropriate executor based on your load testing requirements. k6 also allows you to combine multiple executors within the same test scenario to create complex load profiles. Each executor has its own specific configuration options and can be customized to suit your needs.
    */

        // per_vu_scenario: {
        //     executor: "per-vu-iterations", //5*5=25 iterations
        //     vus: 5,
        //     iterations: 5,
        //     startTime: '3s'
        // },
        // shared_scenario: {
        //     executor: "shared-iterations", // (5/5)=1 iteration per vu, totally 5 iterations
        //     vus: 5,
        //     iterations: 5,
        //     startTime: '0s'
        // },
        // constant_scenario: {
        //     executor: "constant-vus",  //Load testing tool will try to maintain a constant number of VUs throughout the specified duration.
                                          //Each VU will continuously execute the defined scenario until the duration is reached
        //     vus: 5,
        //     duration: "5s",
        //     startTime: '0s'
        // },
        // ramping_vus_scenario: {
        //     executor: "ramping-vus",
        //     startTime: '0s',
        //     stages: [{
        //             target: 5,
        //             duration: "15s"
        //         }
        //     ]
        // },
        // constant_arrival_scenario: {
        //     executor: "constant-arrival-rate",
        //     rate: 5,
        //     duration: '20s',
        //     preAllocatedVUs: 5,
        //     maxVUs: 10,
        // },
        // ramping_arrival_scenario: {
        //     executor: 'ramping-arrival-rate',
        //     startRate: 2,
        //     timeUnit: '1s',
        //     preAllocatedVUs: 2,
        //     maxVUs: 20,
        //     stages: [{
        //             target: 15,
        //             duration: '30s'
        //         },
        //     ],
        // },
        externally_controller_scenario: {
            executor: 'externally-controlled',
            vus: 10,
            maxVUs: 30,
            duration: '2m',
        },
    },
};