import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ProposalAnalysisModel = runtime.Types.Result.DefaultSelection<Prisma.$ProposalAnalysisPayload>;
export type AggregateProposalAnalysis = {
    _count: ProposalAnalysisCountAggregateOutputType | null;
    _avg: ProposalAnalysisAvgAggregateOutputType | null;
    _sum: ProposalAnalysisSumAggregateOutputType | null;
    _min: ProposalAnalysisMinAggregateOutputType | null;
    _max: ProposalAnalysisMaxAggregateOutputType | null;
};
export type ProposalAnalysisAvgAggregateOutputType = {
    id: number | null;
    proposalId: number | null;
    finalScore: number | null;
};
export type ProposalAnalysisSumAggregateOutputType = {
    id: number | null;
    proposalId: number | null;
    finalScore: number | null;
};
export type ProposalAnalysisMinAggregateOutputType = {
    id: number | null;
    proposalId: number | null;
    finalScore: number | null;
    category: string | null;
    evaluationSummary: string | null;
    createdAt: Date | null;
};
export type ProposalAnalysisMaxAggregateOutputType = {
    id: number | null;
    proposalId: number | null;
    finalScore: number | null;
    category: string | null;
    evaluationSummary: string | null;
    createdAt: Date | null;
};
export type ProposalAnalysisCountAggregateOutputType = {
    id: number;
    proposalId: number;
    finalScore: number;
    category: number;
    evaluationSummary: number;
    analysisJson: number;
    createdAt: number;
    _all: number;
};
export type ProposalAnalysisAvgAggregateInputType = {
    id?: true;
    proposalId?: true;
    finalScore?: true;
};
export type ProposalAnalysisSumAggregateInputType = {
    id?: true;
    proposalId?: true;
    finalScore?: true;
};
export type ProposalAnalysisMinAggregateInputType = {
    id?: true;
    proposalId?: true;
    finalScore?: true;
    category?: true;
    evaluationSummary?: true;
    createdAt?: true;
};
export type ProposalAnalysisMaxAggregateInputType = {
    id?: true;
    proposalId?: true;
    finalScore?: true;
    category?: true;
    evaluationSummary?: true;
    createdAt?: true;
};
export type ProposalAnalysisCountAggregateInputType = {
    id?: true;
    proposalId?: true;
    finalScore?: true;
    category?: true;
    evaluationSummary?: true;
    analysisJson?: true;
    createdAt?: true;
    _all?: true;
};
export type ProposalAnalysisAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProposalAnalysisWhereInput;
    orderBy?: Prisma.ProposalAnalysisOrderByWithRelationInput | Prisma.ProposalAnalysisOrderByWithRelationInput[];
    cursor?: Prisma.ProposalAnalysisWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProposalAnalysisCountAggregateInputType;
    _avg?: ProposalAnalysisAvgAggregateInputType;
    _sum?: ProposalAnalysisSumAggregateInputType;
    _min?: ProposalAnalysisMinAggregateInputType;
    _max?: ProposalAnalysisMaxAggregateInputType;
};
export type GetProposalAnalysisAggregateType<T extends ProposalAnalysisAggregateArgs> = {
    [P in keyof T & keyof AggregateProposalAnalysis]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProposalAnalysis[P]> : Prisma.GetScalarType<T[P], AggregateProposalAnalysis[P]>;
};
export type ProposalAnalysisGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProposalAnalysisWhereInput;
    orderBy?: Prisma.ProposalAnalysisOrderByWithAggregationInput | Prisma.ProposalAnalysisOrderByWithAggregationInput[];
    by: Prisma.ProposalAnalysisScalarFieldEnum[] | Prisma.ProposalAnalysisScalarFieldEnum;
    having?: Prisma.ProposalAnalysisScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProposalAnalysisCountAggregateInputType | true;
    _avg?: ProposalAnalysisAvgAggregateInputType;
    _sum?: ProposalAnalysisSumAggregateInputType;
    _min?: ProposalAnalysisMinAggregateInputType;
    _max?: ProposalAnalysisMaxAggregateInputType;
};
export type ProposalAnalysisGroupByOutputType = {
    id: number;
    proposalId: number;
    finalScore: number | null;
    category: string | null;
    evaluationSummary: string | null;
    analysisJson: runtime.JsonValue;
    createdAt: Date;
    _count: ProposalAnalysisCountAggregateOutputType | null;
    _avg: ProposalAnalysisAvgAggregateOutputType | null;
    _sum: ProposalAnalysisSumAggregateOutputType | null;
    _min: ProposalAnalysisMinAggregateOutputType | null;
    _max: ProposalAnalysisMaxAggregateOutputType | null;
};
type GetProposalAnalysisGroupByPayload<T extends ProposalAnalysisGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProposalAnalysisGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProposalAnalysisGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProposalAnalysisGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProposalAnalysisGroupByOutputType[P]>;
}>>;
export type ProposalAnalysisWhereInput = {
    AND?: Prisma.ProposalAnalysisWhereInput | Prisma.ProposalAnalysisWhereInput[];
    OR?: Prisma.ProposalAnalysisWhereInput[];
    NOT?: Prisma.ProposalAnalysisWhereInput | Prisma.ProposalAnalysisWhereInput[];
    id?: Prisma.IntFilter<"ProposalAnalysis"> | number;
    proposalId?: Prisma.IntFilter<"ProposalAnalysis"> | number;
    finalScore?: Prisma.FloatNullableFilter<"ProposalAnalysis"> | number | null;
    category?: Prisma.StringNullableFilter<"ProposalAnalysis"> | string | null;
    evaluationSummary?: Prisma.StringNullableFilter<"ProposalAnalysis"> | string | null;
    analysisJson?: Prisma.JsonFilter<"ProposalAnalysis">;
    createdAt?: Prisma.DateTimeFilter<"ProposalAnalysis"> | Date | string;
    proposal?: Prisma.XOR<Prisma.ProposalScalarRelationFilter, Prisma.ProposalWhereInput>;
};
export type ProposalAnalysisOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    proposalId?: Prisma.SortOrder;
    finalScore?: Prisma.SortOrderInput | Prisma.SortOrder;
    category?: Prisma.SortOrderInput | Prisma.SortOrder;
    evaluationSummary?: Prisma.SortOrderInput | Prisma.SortOrder;
    analysisJson?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    proposal?: Prisma.ProposalOrderByWithRelationInput;
};
export type ProposalAnalysisWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    proposalId?: number;
    AND?: Prisma.ProposalAnalysisWhereInput | Prisma.ProposalAnalysisWhereInput[];
    OR?: Prisma.ProposalAnalysisWhereInput[];
    NOT?: Prisma.ProposalAnalysisWhereInput | Prisma.ProposalAnalysisWhereInput[];
    finalScore?: Prisma.FloatNullableFilter<"ProposalAnalysis"> | number | null;
    category?: Prisma.StringNullableFilter<"ProposalAnalysis"> | string | null;
    evaluationSummary?: Prisma.StringNullableFilter<"ProposalAnalysis"> | string | null;
    analysisJson?: Prisma.JsonFilter<"ProposalAnalysis">;
    createdAt?: Prisma.DateTimeFilter<"ProposalAnalysis"> | Date | string;
    proposal?: Prisma.XOR<Prisma.ProposalScalarRelationFilter, Prisma.ProposalWhereInput>;
}, "id" | "proposalId">;
export type ProposalAnalysisOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    proposalId?: Prisma.SortOrder;
    finalScore?: Prisma.SortOrderInput | Prisma.SortOrder;
    category?: Prisma.SortOrderInput | Prisma.SortOrder;
    evaluationSummary?: Prisma.SortOrderInput | Prisma.SortOrder;
    analysisJson?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ProposalAnalysisCountOrderByAggregateInput;
    _avg?: Prisma.ProposalAnalysisAvgOrderByAggregateInput;
    _max?: Prisma.ProposalAnalysisMaxOrderByAggregateInput;
    _min?: Prisma.ProposalAnalysisMinOrderByAggregateInput;
    _sum?: Prisma.ProposalAnalysisSumOrderByAggregateInput;
};
export type ProposalAnalysisScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProposalAnalysisScalarWhereWithAggregatesInput | Prisma.ProposalAnalysisScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProposalAnalysisScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProposalAnalysisScalarWhereWithAggregatesInput | Prisma.ProposalAnalysisScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"ProposalAnalysis"> | number;
    proposalId?: Prisma.IntWithAggregatesFilter<"ProposalAnalysis"> | number;
    finalScore?: Prisma.FloatNullableWithAggregatesFilter<"ProposalAnalysis"> | number | null;
    category?: Prisma.StringNullableWithAggregatesFilter<"ProposalAnalysis"> | string | null;
    evaluationSummary?: Prisma.StringNullableWithAggregatesFilter<"ProposalAnalysis"> | string | null;
    analysisJson?: Prisma.JsonWithAggregatesFilter<"ProposalAnalysis">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ProposalAnalysis"> | Date | string;
};
export type ProposalAnalysisCreateInput = {
    finalScore?: number | null;
    category?: string | null;
    evaluationSummary?: string | null;
    analysisJson: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    proposal: Prisma.ProposalCreateNestedOneWithoutAnalysisInput;
};
export type ProposalAnalysisUncheckedCreateInput = {
    id?: number;
    proposalId: number;
    finalScore?: number | null;
    category?: string | null;
    evaluationSummary?: string | null;
    analysisJson: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type ProposalAnalysisUpdateInput = {
    finalScore?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    evaluationSummary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    analysisJson?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proposal?: Prisma.ProposalUpdateOneRequiredWithoutAnalysisNestedInput;
};
export type ProposalAnalysisUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    proposalId?: Prisma.IntFieldUpdateOperationsInput | number;
    finalScore?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    evaluationSummary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    analysisJson?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProposalAnalysisCreateManyInput = {
    id?: number;
    proposalId: number;
    finalScore?: number | null;
    category?: string | null;
    evaluationSummary?: string | null;
    analysisJson: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type ProposalAnalysisUpdateManyMutationInput = {
    finalScore?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    evaluationSummary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    analysisJson?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProposalAnalysisUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    proposalId?: Prisma.IntFieldUpdateOperationsInput | number;
    finalScore?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    evaluationSummary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    analysisJson?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProposalAnalysisNullableScalarRelationFilter = {
    is?: Prisma.ProposalAnalysisWhereInput | null;
    isNot?: Prisma.ProposalAnalysisWhereInput | null;
};
export type ProposalAnalysisCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    proposalId?: Prisma.SortOrder;
    finalScore?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    evaluationSummary?: Prisma.SortOrder;
    analysisJson?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ProposalAnalysisAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    proposalId?: Prisma.SortOrder;
    finalScore?: Prisma.SortOrder;
};
export type ProposalAnalysisMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    proposalId?: Prisma.SortOrder;
    finalScore?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    evaluationSummary?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ProposalAnalysisMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    proposalId?: Prisma.SortOrder;
    finalScore?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    evaluationSummary?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ProposalAnalysisSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    proposalId?: Prisma.SortOrder;
    finalScore?: Prisma.SortOrder;
};
export type ProposalAnalysisCreateNestedOneWithoutProposalInput = {
    create?: Prisma.XOR<Prisma.ProposalAnalysisCreateWithoutProposalInput, Prisma.ProposalAnalysisUncheckedCreateWithoutProposalInput>;
    connectOrCreate?: Prisma.ProposalAnalysisCreateOrConnectWithoutProposalInput;
    connect?: Prisma.ProposalAnalysisWhereUniqueInput;
};
export type ProposalAnalysisUncheckedCreateNestedOneWithoutProposalInput = {
    create?: Prisma.XOR<Prisma.ProposalAnalysisCreateWithoutProposalInput, Prisma.ProposalAnalysisUncheckedCreateWithoutProposalInput>;
    connectOrCreate?: Prisma.ProposalAnalysisCreateOrConnectWithoutProposalInput;
    connect?: Prisma.ProposalAnalysisWhereUniqueInput;
};
export type ProposalAnalysisUpdateOneWithoutProposalNestedInput = {
    create?: Prisma.XOR<Prisma.ProposalAnalysisCreateWithoutProposalInput, Prisma.ProposalAnalysisUncheckedCreateWithoutProposalInput>;
    connectOrCreate?: Prisma.ProposalAnalysisCreateOrConnectWithoutProposalInput;
    upsert?: Prisma.ProposalAnalysisUpsertWithoutProposalInput;
    disconnect?: Prisma.ProposalAnalysisWhereInput | boolean;
    delete?: Prisma.ProposalAnalysisWhereInput | boolean;
    connect?: Prisma.ProposalAnalysisWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProposalAnalysisUpdateToOneWithWhereWithoutProposalInput, Prisma.ProposalAnalysisUpdateWithoutProposalInput>, Prisma.ProposalAnalysisUncheckedUpdateWithoutProposalInput>;
};
export type ProposalAnalysisUncheckedUpdateOneWithoutProposalNestedInput = {
    create?: Prisma.XOR<Prisma.ProposalAnalysisCreateWithoutProposalInput, Prisma.ProposalAnalysisUncheckedCreateWithoutProposalInput>;
    connectOrCreate?: Prisma.ProposalAnalysisCreateOrConnectWithoutProposalInput;
    upsert?: Prisma.ProposalAnalysisUpsertWithoutProposalInput;
    disconnect?: Prisma.ProposalAnalysisWhereInput | boolean;
    delete?: Prisma.ProposalAnalysisWhereInput | boolean;
    connect?: Prisma.ProposalAnalysisWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProposalAnalysisUpdateToOneWithWhereWithoutProposalInput, Prisma.ProposalAnalysisUpdateWithoutProposalInput>, Prisma.ProposalAnalysisUncheckedUpdateWithoutProposalInput>;
};
export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type ProposalAnalysisCreateWithoutProposalInput = {
    finalScore?: number | null;
    category?: string | null;
    evaluationSummary?: string | null;
    analysisJson: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type ProposalAnalysisUncheckedCreateWithoutProposalInput = {
    id?: number;
    finalScore?: number | null;
    category?: string | null;
    evaluationSummary?: string | null;
    analysisJson: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type ProposalAnalysisCreateOrConnectWithoutProposalInput = {
    where: Prisma.ProposalAnalysisWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProposalAnalysisCreateWithoutProposalInput, Prisma.ProposalAnalysisUncheckedCreateWithoutProposalInput>;
};
export type ProposalAnalysisUpsertWithoutProposalInput = {
    update: Prisma.XOR<Prisma.ProposalAnalysisUpdateWithoutProposalInput, Prisma.ProposalAnalysisUncheckedUpdateWithoutProposalInput>;
    create: Prisma.XOR<Prisma.ProposalAnalysisCreateWithoutProposalInput, Prisma.ProposalAnalysisUncheckedCreateWithoutProposalInput>;
    where?: Prisma.ProposalAnalysisWhereInput;
};
export type ProposalAnalysisUpdateToOneWithWhereWithoutProposalInput = {
    where?: Prisma.ProposalAnalysisWhereInput;
    data: Prisma.XOR<Prisma.ProposalAnalysisUpdateWithoutProposalInput, Prisma.ProposalAnalysisUncheckedUpdateWithoutProposalInput>;
};
export type ProposalAnalysisUpdateWithoutProposalInput = {
    finalScore?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    evaluationSummary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    analysisJson?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProposalAnalysisUncheckedUpdateWithoutProposalInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    finalScore?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    evaluationSummary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    analysisJson?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProposalAnalysisSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    proposalId?: boolean;
    finalScore?: boolean;
    category?: boolean;
    evaluationSummary?: boolean;
    analysisJson?: boolean;
    createdAt?: boolean;
    proposal?: boolean | Prisma.ProposalDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["proposalAnalysis"]>;
export type ProposalAnalysisSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    proposalId?: boolean;
    finalScore?: boolean;
    category?: boolean;
    evaluationSummary?: boolean;
    analysisJson?: boolean;
    createdAt?: boolean;
    proposal?: boolean | Prisma.ProposalDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["proposalAnalysis"]>;
export type ProposalAnalysisSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    proposalId?: boolean;
    finalScore?: boolean;
    category?: boolean;
    evaluationSummary?: boolean;
    analysisJson?: boolean;
    createdAt?: boolean;
    proposal?: boolean | Prisma.ProposalDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["proposalAnalysis"]>;
export type ProposalAnalysisSelectScalar = {
    id?: boolean;
    proposalId?: boolean;
    finalScore?: boolean;
    category?: boolean;
    evaluationSummary?: boolean;
    analysisJson?: boolean;
    createdAt?: boolean;
};
export type ProposalAnalysisOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "proposalId" | "finalScore" | "category" | "evaluationSummary" | "analysisJson" | "createdAt", ExtArgs["result"]["proposalAnalysis"]>;
export type ProposalAnalysisInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    proposal?: boolean | Prisma.ProposalDefaultArgs<ExtArgs>;
};
export type ProposalAnalysisIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    proposal?: boolean | Prisma.ProposalDefaultArgs<ExtArgs>;
};
export type ProposalAnalysisIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    proposal?: boolean | Prisma.ProposalDefaultArgs<ExtArgs>;
};
export type $ProposalAnalysisPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ProposalAnalysis";
    objects: {
        proposal: Prisma.$ProposalPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        proposalId: number;
        finalScore: number | null;
        category: string | null;
        evaluationSummary: string | null;
        analysisJson: runtime.JsonValue;
        createdAt: Date;
    }, ExtArgs["result"]["proposalAnalysis"]>;
    composites: {};
};
export type ProposalAnalysisGetPayload<S extends boolean | null | undefined | ProposalAnalysisDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProposalAnalysisPayload, S>;
export type ProposalAnalysisCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProposalAnalysisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProposalAnalysisCountAggregateInputType | true;
};
export interface ProposalAnalysisDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ProposalAnalysis'];
        meta: {
            name: 'ProposalAnalysis';
        };
    };
    findUnique<T extends ProposalAnalysisFindUniqueArgs>(args: Prisma.SelectSubset<T, ProposalAnalysisFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProposalAnalysisClient<runtime.Types.Result.GetResult<Prisma.$ProposalAnalysisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProposalAnalysisFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProposalAnalysisFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProposalAnalysisClient<runtime.Types.Result.GetResult<Prisma.$ProposalAnalysisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProposalAnalysisFindFirstArgs>(args?: Prisma.SelectSubset<T, ProposalAnalysisFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProposalAnalysisClient<runtime.Types.Result.GetResult<Prisma.$ProposalAnalysisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProposalAnalysisFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProposalAnalysisFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProposalAnalysisClient<runtime.Types.Result.GetResult<Prisma.$ProposalAnalysisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProposalAnalysisFindManyArgs>(args?: Prisma.SelectSubset<T, ProposalAnalysisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProposalAnalysisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProposalAnalysisCreateArgs>(args: Prisma.SelectSubset<T, ProposalAnalysisCreateArgs<ExtArgs>>): Prisma.Prisma__ProposalAnalysisClient<runtime.Types.Result.GetResult<Prisma.$ProposalAnalysisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProposalAnalysisCreateManyArgs>(args?: Prisma.SelectSubset<T, ProposalAnalysisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProposalAnalysisCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProposalAnalysisCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProposalAnalysisPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProposalAnalysisDeleteArgs>(args: Prisma.SelectSubset<T, ProposalAnalysisDeleteArgs<ExtArgs>>): Prisma.Prisma__ProposalAnalysisClient<runtime.Types.Result.GetResult<Prisma.$ProposalAnalysisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProposalAnalysisUpdateArgs>(args: Prisma.SelectSubset<T, ProposalAnalysisUpdateArgs<ExtArgs>>): Prisma.Prisma__ProposalAnalysisClient<runtime.Types.Result.GetResult<Prisma.$ProposalAnalysisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProposalAnalysisDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProposalAnalysisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProposalAnalysisUpdateManyArgs>(args: Prisma.SelectSubset<T, ProposalAnalysisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProposalAnalysisUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProposalAnalysisUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProposalAnalysisPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProposalAnalysisUpsertArgs>(args: Prisma.SelectSubset<T, ProposalAnalysisUpsertArgs<ExtArgs>>): Prisma.Prisma__ProposalAnalysisClient<runtime.Types.Result.GetResult<Prisma.$ProposalAnalysisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProposalAnalysisCountArgs>(args?: Prisma.Subset<T, ProposalAnalysisCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProposalAnalysisCountAggregateOutputType> : number>;
    aggregate<T extends ProposalAnalysisAggregateArgs>(args: Prisma.Subset<T, ProposalAnalysisAggregateArgs>): Prisma.PrismaPromise<GetProposalAnalysisAggregateType<T>>;
    groupBy<T extends ProposalAnalysisGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProposalAnalysisGroupByArgs['orderBy'];
    } : {
        orderBy?: ProposalAnalysisGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProposalAnalysisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProposalAnalysisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProposalAnalysisFieldRefs;
}
export interface Prisma__ProposalAnalysisClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    proposal<T extends Prisma.ProposalDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProposalDefaultArgs<ExtArgs>>): Prisma.Prisma__ProposalClient<runtime.Types.Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProposalAnalysisFieldRefs {
    readonly id: Prisma.FieldRef<"ProposalAnalysis", 'Int'>;
    readonly proposalId: Prisma.FieldRef<"ProposalAnalysis", 'Int'>;
    readonly finalScore: Prisma.FieldRef<"ProposalAnalysis", 'Float'>;
    readonly category: Prisma.FieldRef<"ProposalAnalysis", 'String'>;
    readonly evaluationSummary: Prisma.FieldRef<"ProposalAnalysis", 'String'>;
    readonly analysisJson: Prisma.FieldRef<"ProposalAnalysis", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"ProposalAnalysis", 'DateTime'>;
}
export type ProposalAnalysisFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProposalAnalysisSelect<ExtArgs> | null;
    omit?: Prisma.ProposalAnalysisOmit<ExtArgs> | null;
    include?: Prisma.ProposalAnalysisInclude<ExtArgs> | null;
    where: Prisma.ProposalAnalysisWhereUniqueInput;
};
export type ProposalAnalysisFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProposalAnalysisSelect<ExtArgs> | null;
    omit?: Prisma.ProposalAnalysisOmit<ExtArgs> | null;
    include?: Prisma.ProposalAnalysisInclude<ExtArgs> | null;
    where: Prisma.ProposalAnalysisWhereUniqueInput;
};
export type ProposalAnalysisFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProposalAnalysisSelect<ExtArgs> | null;
    omit?: Prisma.ProposalAnalysisOmit<ExtArgs> | null;
    include?: Prisma.ProposalAnalysisInclude<ExtArgs> | null;
    where?: Prisma.ProposalAnalysisWhereInput;
    orderBy?: Prisma.ProposalAnalysisOrderByWithRelationInput | Prisma.ProposalAnalysisOrderByWithRelationInput[];
    cursor?: Prisma.ProposalAnalysisWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProposalAnalysisScalarFieldEnum | Prisma.ProposalAnalysisScalarFieldEnum[];
};
export type ProposalAnalysisFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProposalAnalysisSelect<ExtArgs> | null;
    omit?: Prisma.ProposalAnalysisOmit<ExtArgs> | null;
    include?: Prisma.ProposalAnalysisInclude<ExtArgs> | null;
    where?: Prisma.ProposalAnalysisWhereInput;
    orderBy?: Prisma.ProposalAnalysisOrderByWithRelationInput | Prisma.ProposalAnalysisOrderByWithRelationInput[];
    cursor?: Prisma.ProposalAnalysisWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProposalAnalysisScalarFieldEnum | Prisma.ProposalAnalysisScalarFieldEnum[];
};
export type ProposalAnalysisFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProposalAnalysisSelect<ExtArgs> | null;
    omit?: Prisma.ProposalAnalysisOmit<ExtArgs> | null;
    include?: Prisma.ProposalAnalysisInclude<ExtArgs> | null;
    where?: Prisma.ProposalAnalysisWhereInput;
    orderBy?: Prisma.ProposalAnalysisOrderByWithRelationInput | Prisma.ProposalAnalysisOrderByWithRelationInput[];
    cursor?: Prisma.ProposalAnalysisWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProposalAnalysisScalarFieldEnum | Prisma.ProposalAnalysisScalarFieldEnum[];
};
export type ProposalAnalysisCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProposalAnalysisSelect<ExtArgs> | null;
    omit?: Prisma.ProposalAnalysisOmit<ExtArgs> | null;
    include?: Prisma.ProposalAnalysisInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProposalAnalysisCreateInput, Prisma.ProposalAnalysisUncheckedCreateInput>;
};
export type ProposalAnalysisCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProposalAnalysisCreateManyInput | Prisma.ProposalAnalysisCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProposalAnalysisCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProposalAnalysisSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProposalAnalysisOmit<ExtArgs> | null;
    data: Prisma.ProposalAnalysisCreateManyInput | Prisma.ProposalAnalysisCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ProposalAnalysisIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ProposalAnalysisUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProposalAnalysisSelect<ExtArgs> | null;
    omit?: Prisma.ProposalAnalysisOmit<ExtArgs> | null;
    include?: Prisma.ProposalAnalysisInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProposalAnalysisUpdateInput, Prisma.ProposalAnalysisUncheckedUpdateInput>;
    where: Prisma.ProposalAnalysisWhereUniqueInput;
};
export type ProposalAnalysisUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProposalAnalysisUpdateManyMutationInput, Prisma.ProposalAnalysisUncheckedUpdateManyInput>;
    where?: Prisma.ProposalAnalysisWhereInput;
    limit?: number;
};
export type ProposalAnalysisUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProposalAnalysisSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProposalAnalysisOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProposalAnalysisUpdateManyMutationInput, Prisma.ProposalAnalysisUncheckedUpdateManyInput>;
    where?: Prisma.ProposalAnalysisWhereInput;
    limit?: number;
    include?: Prisma.ProposalAnalysisIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ProposalAnalysisUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProposalAnalysisSelect<ExtArgs> | null;
    omit?: Prisma.ProposalAnalysisOmit<ExtArgs> | null;
    include?: Prisma.ProposalAnalysisInclude<ExtArgs> | null;
    where: Prisma.ProposalAnalysisWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProposalAnalysisCreateInput, Prisma.ProposalAnalysisUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProposalAnalysisUpdateInput, Prisma.ProposalAnalysisUncheckedUpdateInput>;
};
export type ProposalAnalysisDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProposalAnalysisSelect<ExtArgs> | null;
    omit?: Prisma.ProposalAnalysisOmit<ExtArgs> | null;
    include?: Prisma.ProposalAnalysisInclude<ExtArgs> | null;
    where: Prisma.ProposalAnalysisWhereUniqueInput;
};
export type ProposalAnalysisDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProposalAnalysisWhereInput;
    limit?: number;
};
export type ProposalAnalysisDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProposalAnalysisSelect<ExtArgs> | null;
    omit?: Prisma.ProposalAnalysisOmit<ExtArgs> | null;
    include?: Prisma.ProposalAnalysisInclude<ExtArgs> | null;
};
export {};
